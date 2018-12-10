import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Provider } from 'react-redux'
import { reduxForm, Field as ReduxField, reducer as reduxFormReducer  } from 'redux-form'
import { createStore, combineReducers } from 'redux'
import { MenuItem, RadioButton, RadioButtonGroup, Checkbox } from 'nokia-react-components'
import { FormRenderer } from 'nokia-react-redux-components'
import ReactDOM from 'react-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { nokiaDefaultTheme } from 'nokia-react-components/themes/nokiaDefaultTheme.js'
import { ModalDialog, DialogContent } from 'nokia-react-components/Dialog'
import uuidv1 from "uuid"

const muiTheme = getMuiTheme(nokiaDefaultTheme, {
  textField: {
    textColor: 'white'
  }
})

const initialState = {
  list:  [
    { renderTextField: "React Redux Tutorial for Beginners", renderTextField2: "XXX", renderSlider: 0.75, id: uuidv1() },
    { renderTextField: "How to use Redux with React", id: uuidv1() }
  ]
}

const elems = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const rootReducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  elems 
})

// const store = (window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore)(rootReducer)
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


// A class that logs events and emulates error state
class Field extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    appendLog: PropTypes.func.isRequired,
    component: PropTypes.node,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func
  }

  handleChange = (event, value) => {
    this.props.appendLog(this.props.name + ': onChange: ' + value)
    this.props.onChange && this.props.onChange(event, value)
  }

  handleFocus = (event) => {
    this.props.appendLog(this.props.name + ': onFocus')
    this.props.onFocus && this.props.onFocus(event)
  }

  handleBlur = (event) => {
    this.props.appendLog(this.props.name + ': onBlur')
    this.props.onBlur && this.props.onBlur(event)
  }

  render () {
    let {
      appendLog, // eslint-disable-line no-unused-vars
      onChange, // eslint-disable-line no-unused-vars
      onFocus, // eslint-disable-line no-unused-vars
      onBlur, // eslint-disable-line no-unused-vars
      component,
      mode,
      ...other} = this.props
    return (
      <ReduxField
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        component={component}
        meta={{
          dirty: true,
          touched: true,
          error: mode === 'error' ? 'Example error: This field is required' : undefined
        }}
        {...other}
      />
    )
  }
}

const styles = {
  h3: {
    marginBottom: '5px'
  },
  wrapper: {
    width: '1000px',
    height: '1000px',
    maxWidth: '1000px',
    maxHeight: '1000px',
    margin: '0 auto',
    display: 'flex',
    flowFlow: 'row nowrap'
  },
  description: {
    flex: '4 0',
    margin: '0px 1px'
  },
  log: {
    backgroundColor: '#eee',
    border: '2px solid #ddd',
    padding: '0px 10px',
    minHeight: '30px',
    maxHeight: '280px',
    overflowY: 'auto'
  },
  renderers: {
    flex: '2 0',
    margin: '0px 2px'
  },
  todo: {
    color: 'rgb(190, 0, 6)'
  },
  code: {
    fontWeight: 600,
    fontSize: '16px'
  }
}

// a class that demos each form renderer
class FormRendererFeature extends Component {
  static propTypes = {
    reset: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      mode: 'regular',
      fullWidth: false,
      logs: []
    }
  }

  handleFullWidth = (event, isChecked) => {
    this.setState({fullWidth: isChecked})
    this.appendLog('fullWidth: ' + isChecked)
  }

  changeMode = (event, value) => {
    this.setState({mode: value})
    this.appendLog('changeMode: ' + value)
  }

  appendLog = (message) => {
    this.setState({logs: [...this.state.logs, message]})
  }

  render () {
    return (
      <div style={styles.wrapper}>
        <div style={styles.description}>
          <div style={{display: 'flex'}}>
            <div>
              <label>Change mode: </label>
              <RadioButtonGroup value={this.state.mode} defaultSelected='regular' onChange={this.changeMode}>
                <RadioButton value='regular' label='regular' />
                <RadioButton value='disabled' label='disabled' />
                <RadioButton value='readOnly' label='readOnly' />
                <RadioButton value='error' label='error' />
              </RadioButtonGroup>
            </div>
            <div style={{marginLeft: 24}}>
              <label>Change field prop: </label>
              <Checkbox label='fullWidth' onCheck={this.handleFullWidth} />
            </div>
          </div>

          <h3 style={styles.h3}>Event Log</h3>
          <div style={styles.log}>
            {this.state.logs.map((logMessage, index) =>
              <div key={index}>{logMessage}</div>
            )}
          </div>
          <button onClick={() => this.setState({logs: []})}>Clear</button>
        </div>
        <div style={styles.renderers}>
          <h3 style={styles.h3}>InputTextField</h3>
          <Field
            name='renderTextField'
            component={FormRenderer.renderTextField}
            title='Title for renderTextField'
            disabled={this.state.mode === 'disabled'}
            readOnly={this.state.mode === 'readOnly'}
            infotip='Something goes here.'
            tooltip='This is a tooltip'
            actions={[{
              name: 'delete',
              label: 'Remove',
              action: () => {},
              data: 'abc'
            }]}
            fullWidth={this.state.fullWidth}

            appendLog={this.appendLog}
            mode={this.state.mode}
          />
          <Field
            name='renderTextField2'
            component={FormRenderer.renderTextField}
            title='Title for renderTextField with action'
            disabled={this.state.mode === 'disabled'}
            readOnly={this.state.mode === 'readOnly'}
            showIcon
            hintText='Search...'
            titleSuffix=' (optional)'
            itemStyle={{paddingTop: 20}}
            fullWidth={this.state.fullWidth}

            appendLog={this.appendLog}
            mode={this.state.mode} 
          />

          <h3 style={styles.h3}>TextArea</h3>
          <Field
            name='renderTextArea'
            component={FormRenderer.renderTextArea}
            title='Title for renderTextArea'
            disabled={this.state.mode === 'disabled'}
            readOnly={this.state.mode === 'readOnly'}
            defaultValue='This is a default value'
            fullWidth={this.state.fullWidth}

            appendLog={this.appendLog}
            mode={this.state.mode}
          />

          <h3 style={styles.h3}>DropDownMenu</h3>
          <Field
            name='renderDropDownMenu'
            component={FormRenderer.renderDropDownMenu}
            title='Title for renderDropDownMenu'
            disabled={this.state.mode === 'disabled'}
            readOnly={this.state.mode === 'readOnly'}
            hintText='This is a hint'
            tooltip='This is a tooltip'
            fullWidth={this.state.fullWidth}

            appendLog={this.appendLog}
            mode={this.state.mode}
          >
            <MenuItem value='a' primaryText='Option A' />
            <MenuItem value='b' primaryText='Option B' />
            <MenuItem value='c' primaryText='Option C' />
          </Field>

          <h3 style={styles.h3}>AutoComplete</h3>
          <Field
            name='renderAutoCompleteField'
            component={FormRenderer.renderAutoCompleteField}
            title='Title for renderAutoCompleteField'
            dataSource={['aa', 'ab', 'bb']}
            disabled={this.state.mode === 'disabled'}
            readOnly={this.state.mode === 'readOnly'}
            showLeftIcon
            fullWidth={this.state.fullWidth}

            appendLog={this.appendLog}
            mode={this.state.mode}
          />

          <h3 style={styles.h3}>MultiSelectInput</h3>
          <Field
            name='renderMultiSelectInput'
            component={FormRenderer.renderMultiSelectInput}
            title='Title for renderMultiSelectInput'
            menuContent={[
              {label: 'Item A', value: 'a'},
              {label: 'Item B', value: 'b'},
              {label: 'Item C', value: 'c'},
              {label: 'Item D', value: 'd'}
            ]}
            disabled={this.state.mode === 'disabled'}
            readOnly={this.state.mode === 'readOnly'}
            fullWidth={this.state.fullWidth}

            appendLog={this.appendLog}
            mode={this.state.mode}
          />
          <h3 style={styles.h3}>CheckBox</h3>
          <Field
            name='renderCheckbox1'
            component={FormRenderer.renderCheckbox}
            label='Label for renderCheckbox A'
            disabled={this.state.mode === 'disabled'}
            readOnly={this.state.mode === 'readOnly'}

            appendLog={this.appendLog}
            mode={this.state.mode}
          />
          <Field
            name='renderCheckbox2'
            component={FormRenderer.renderCheckbox}
            label='Label for renderCheckbox B'
            disabled={this.state.mode === 'disabled'}
            readOnly={this.state.mode === 'readOnly'}
            itemStyle={{marginTop: 8}}

            appendLog={this.appendLog}
            mode={this.state.mode}
          />

          <h3 style={styles.h3}>Toggle</h3>
          <Field
            name='renderToggle'
            component={FormRenderer.renderToggle}
            label='Label for renderToggle'
            disabled={this.state.mode === 'disabled'}
            readOnly={this.state.mode === 'readOnly'}

            appendLog={this.appendLog}
            mode={this.state.mode}
          />

          <h3 style={styles.h3}>Radio Button</h3>
          <Field
            name='renderRadioButtonGroup'
            component={FormRenderer.renderRadioButtonGroup}
            title='Title for renderRadioButtonGroup'
            disabled={this.state.mode === 'disabled'}
            readOnly={this.state.mode === 'readOnly'}
            defaultValue='a'

            appendLog={this.appendLog}
            mode={this.state.mode}
          >
            <RadioButton value='a' label='A' />
            <RadioButton value='b' label='B' />
          </Field>

          <h3 style={styles.h3}>Spinner</h3>
          <Field
            name='renderSpinner'
            component={FormRenderer.renderSpinner}
            title='Title for renderSpinner'
            disabled={this.state.mode === 'disabled'}
            readOnly={this.state.mode === 'readOnly'}
            fullWidth={this.state.fullWidth}

            appendLog={this.appendLog}
            mode={this.state.mode}
          />

          <h3 style={styles.h3}>Slider</h3>
          <Field
            name='renderSlider'
            component={FormRenderer.renderSlider}
            title='Title for renderSlider'
            disabled={this.state.mode === 'disabled'}
            readOnly={this.state.mode === 'readOnly'}

            appendLog={this.appendLog}
            mode={this.state.mode}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {

  console.log(state)
  console.log(ownProps)
  return {
    // initialValues: ownProps.list[0]
    initialValues: state.elems.list[0]
  }
}

const mapDispatchToProps = {
}

const FormRendererExample = connect(mapStateToProps, mapDispatchToProps )(reduxForm({
  form: 'form-renderer',
  initialValues: {
    notExisting: 'Not Existing',
    renderRadioButtonGroup: 'a',
    renderSlider: 0.5
  }
})(FormRendererFeature))

const FormDialog = (props) => {

  const okayLabel = 'OK'
  const rightAction = [{
    label: okayLabel,
    key: okayLabel,
    name: okayLabel,
    action: () => console.log('close'),
    autoFocus: true
  }]

  return (
    <ModalDialog
      open={true}
      rightActions={rightAction}
      style={{ maxWidth: 800, margin: 0}}
    >
      <DialogContent
        titleStyle={{fontWeight: 500}}
        title={'Example form dialog'}
      >
        <div
          style={{display: 'flex', alignItems: 'flex-start', flexFlow: 'row wrap', flex: '2 0', margin: '0px 5px'}}
        >
          <FormRendererExample />

        </div>
      </DialogContent>
    </ModalDialog>)
}

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <FormDialog />
      </div>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)
