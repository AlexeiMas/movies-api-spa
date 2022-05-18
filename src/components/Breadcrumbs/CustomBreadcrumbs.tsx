import React from 'react';
import {Box, Breadcrumbs, Container, Link, Typography} from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {Link as RLink} from "react-router-dom"
import {useDispatch} from "react-redux"
import {setSearchString} from "../../store/actionCreators/search"

export type TCustomBreadcrumbs = {
  rawBreadcrumbs: string[]
}

const CustomBreadcrumbs: React.FC<TCustomBreadcrumbs> = ({rawBreadcrumbs}) => {
  const dispatch = useDispatch()
  const breadcrumbs = rawBreadcrumbs.map((item, i) => {
    if (i < rawBreadcrumbs.length - 1) {
      return (
        <Link component={RLink} underline="hover" key={i+1} color="inherit" to={'/' + item} onClick={() => dispatch(setSearchString(''))}>
          {item !== '' ? (item[0].toUpperCase() + item.slice(1)) : 'Home'}
        </Link>
      )
    }
    if (i === rawBreadcrumbs.length - 1) {
      return (
        <Typography key={i+1} color="text.primary" sx={{cursor: "default"}}>
          {item.length ? item[0].toUpperCase() + item.slice(1) : 'Home'}
        </Typography>
      )
    }
  })

  return (
    <Container>
      <Box my={2}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Box>
    </Container>
  );
};

export default CustomBreadcrumbs;
