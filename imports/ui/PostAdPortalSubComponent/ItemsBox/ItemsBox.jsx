import React from 'react';
import ClearOne from '../ClearOne';
import SeeOne from '../ViewOneItem';
import {connect} from 'react-redux';
import useStyles from '../../style/itemTableStyle';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class ItemsBox extends React.Component {

    render() {
        const classes = useStyles;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Item Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Category</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Added Date</TableCell>
                            <TableCell align="right">Operation</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.itemArray.map((item, idx) => {
                            return (
                                <TableRow key={item.itemname + idx}>
                                    <TableCell component="th" scope="row">
                                        {item.itemname}
                                    </TableCell>
                                    <TableCell align="right">{item.price}</TableCell>
                                    <TableCell align="right">{item.category}</TableCell>
                                    <TableCell align="left">{item.description}</TableCell>
                                    <TableCell align="right">{item.date.toString()}</TableCell>
                                    <TableCell align="right"><ClearOne index={idx}/><SeeOne index={idx}/></TableCell>
                                </TableRow>
                            )
                        })
                        }
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

const mapStateToProps = (state) => {
    return {itemArray: state.itemProcess.itemArray};
}
export default connect(mapStateToProps, null)(ItemsBox);