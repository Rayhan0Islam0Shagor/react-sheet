import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

export default function MyTable({ data }) {
  console.log("🚀 ~ file: MyTable.jsx ~ line 23 ~ MyTable ~ data", data);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {data &&
              data.length > 0 &&
              Object.entries(data[0]).map((key, value) => {
                return (
                  <TableCell
                    key={key}
                    sx={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      fontWeight: key[1].priority ? "bold" : "normal",
                    }}
                  >
                    {key[0]?.split("_").join(" ")}
                  </TableCell>
                );
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {Object.keys(row).map((key) => (
                <TableCell
                  sx={{
                    whiteSpace: "nowrap",
                  }}
                  key={key}
                >
                  {row[key]?.value || row[key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
