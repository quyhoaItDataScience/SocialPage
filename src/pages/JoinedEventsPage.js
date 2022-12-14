import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import { Link, useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function JoinedEventsPage() {
  const [isApproved, setIsApproved] = React.useState(false);
  const [isChecked, setIsChecked] = React.useState(false);

  const navigate = useNavigate();

  return (
    <Container sx={{ marginTop: "40px" }}>
      <Typography variant="h4" textAlign="center">
        Các sự kiện của bạn đã đăng ký
      </Typography>
      <TableContainer component={Paper} sx={{ margin: "40px 0" }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Tên sự kiện</StyledTableCell>
              <StyledTableCell align="right">Địa điểm</StyledTableCell>
              <StyledTableCell align="right">Xem thêm</StyledTableCell>
              <StyledTableCell align="right">Trạng thái</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  quyhoa
                </StyledTableCell>
                <StyledTableCell align="right">Ho Chi Minh</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => {
                      navigate("/event-detail/1");
                    }}
                  >
                    Chi tiết
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="right" sx={{}}>
                  {isApproved ? (
                    <CheckCircleIcon color="#fff" />
                  ) : isChecked ? (
                    <HighlightOffIcon
                      color="red"
                      sx={{ color: "red !important" }}
                    />
                  ) : (
                    <AutorenewOutlinedIcon />
                  )}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
