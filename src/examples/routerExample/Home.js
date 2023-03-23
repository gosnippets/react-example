import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ConditionalRendering from '../ReactBasic/ConditionalRendering'
import ControlledAndUncontrolled from '../ReactBasic/ControlledAndUncontrolled'
import DynamicStyles from '../ReactBasic/DynamicStyles'
import HOC from '../ReactBasic/HOC'
import JSXExample from '../ReactBasic/JSXExample'
import ReactFragment from '../ReactBasic/ReactFragment'
import StatelessVsStateful from '../ReactBasic/StatelessVsStateful'
import CustomHookExample from '../reactHooks/CustomHookExample'
import MemoExample from '../reactHooks/MemoExample'
import ReactHooks from '../reactHooks/ReactHooks'
import UseCallBackExample from '../reactHooks/UseCallBackExample'
import UseContextExample from '../reactHooks/UseContextExample'
import UseMemoExample from '../reactHooks/UseMemoExample'
import UseReducerExample from '../reactHooks/UseReducerExample'
import UseRefExample from '../reactHooks/UseRefExample'
import ReduxExample from '../ReduxExample/ReduxExample'
import UserComponent from '../ReduxExample/UserComponent'
import { Button } from 'react-bootstrap'
import { Alert, Autocomplete, Box, Collapse, IconButton, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';

const topFilms = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 }
]

export default class Home extends Component {
    state = { value: topFilms[2], open: true }
    render() {
        return (
            <div>
                <button className='btn btn-primary'>Primary Button</button>
                <Button>Button</Button>
                <h2>This is Home page</h2>
                <h2>{this.state.value && this.state.value.label}- {this.state.value && this.state.value.year}</h2>
                <div>
                    <Autocomplete
                        value={this.state.value}
                        id="combo-box-demo"
                        options={topFilms}
                        onChange={(event, newValue) => {
                            // setValue(newValue);
                            this.setState({ value: newValue })
                            console.log(event, newValue)
                        }}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Movie" />}
                    />
                    <div>
                        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        <TextField id="filled-basic" label="Filled" variant="filled" />
                        <TextField id="standard-basic" label="Standard" variant="standard" />
                    </div>
                    <div>
                        <Alert severity="error">This is an error alert — check it out!</Alert>
                        <Alert severity="warning">This is a warning alert — check it out!</Alert>
                        <Alert severity="info">This is an info alert — check it out!</Alert>
                        <Alert severity="success">This is a success alert — check it out!</Alert>
                    </div>

                    <Box sx={{ width: '100%' }}>
                        <Collapse in={this.state.open}>
                            <Alert
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            this.setState({ open: false });
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                sx={{ mb: 2 }}
                            >
                                Close me!
                            </Alert>
                        </Collapse>
                        <Button
                            disabled={this.state.open}
                            variant="outlined"
                            onClick={() => {
                                this.setState({ open: true });
                            }}
                        >
                            Re-open
                        </Button>
                    </Box>
                </div>
                {/* <ReactHooks/> */}
                {/* <UseContextExample/> */}
                {/* <UseRefExample/> */}
                {/* <UseReducerExample /> */}
                {/* <MemoExample /> */}
                {/* <UseCallBackExample /> */}
                {/* <UseMemoExample /> */}
                {/* <CustomHookExample /> */}
                {/* <JSXExample /> */}
                {/* <ConditionalRendering /> */}
                {/* <StatelessVsStateful /> */}
                {/* <ControlledAndUncontrolled /> */}
                {/* <ReactFragment /> */}
                {/* <HOC /> */}
                {/* <DynamicStyles /> */}
                {/* <ReduxExample /> */}
                <UserComponent />

            </div>
        )
    }
}
