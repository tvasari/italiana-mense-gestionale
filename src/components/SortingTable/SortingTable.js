import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TableContainer, Table, Paper } from '@material-ui/core/';
import SortingTableHeader from 'components/SortingTable/SortingTableHeader';
import SortingTableBody from 'components/SortingTable/SortingTableBody';

const useStyles = makeStyles(theme => ({
  container: {...theme.workBench, ...theme.container},
}));

const SortingTable = ({ objEntries, colArray, headers, colSpan }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table>
            <SortingTableHeader headers={headers} colSpan={colSpan}/>
            <SortingTableBody objEntries={objEntries} colArray={colArray}/>
      </Table>
    </TableContainer>
  );
}

export default SortingTable;