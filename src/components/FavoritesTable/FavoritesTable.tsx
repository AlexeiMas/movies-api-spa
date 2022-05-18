import Paper from '@mui/material/Paper';
import React from 'react';
import {
  Box,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import {TMovieDetails} from "../../types/movieDetails";
import {useDispatch} from "react-redux"
import {delFavorites} from "../../store/actionCreators/favorites"
import {IMAGE_PATH_BASE} from "../../utils/consts"

export type TFavoritesTable = {
  detailsData: TMovieDetails[]
}

const FavoritesTable: React.FC<TFavoritesTable> = ({detailsData}) => {
  const [page, setPage] = React.useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);
  const dispatch = useDispatch();

  const columns = ['Preview', "Title", "Date", "Productions", "Actions"];
  const rows = detailsData.map((item) => {
    const {backdrop_path, title, release_date, production_countries, id} = item;
    return [
      (
        <Box
          component={"img"}
          sx={{
            height: 70,
            width: 125,
          }}
          src={IMAGE_PATH_BASE + backdrop_path}
          alt="poster"
        />
      ),
      title, release_date, production_countries.map(el => el.iso_3166_1).join(', '),
      (
        <IconButton aria-label="delete" size="large" onClick={() => dispatch(delFavorites(id))}>
          <DeleteIcon fontSize="inherit"/>
        </IconButton>
      )
    ]
  });

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{width: '100%', overflow: 'hidden'}}>
      <TableContainer sx={{maxHeight: 440}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column} align={"center"}>
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row , i) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                    {columns.map((column, index) => {
                      return (
                        <TableCell key={index + ' ' + i} align={"center"} sx={{width: `calc(100%/${columns.length})`}}>
                          {row[index]}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default FavoritesTable;
