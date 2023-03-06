import Header from "../../components/Header/Header";
import { Box } from "@mui/material";
import Table from "../../components/Table/Table";
import { useState, useMemo } from "react";

const NbaPlayers = ({ playerData }) => {
  const columns = useMemo(
    () => [
      { field: "id", headerName: "ID", width: 100 },
      { field: "firstname", headerName: "First Name", width: 250 },
      { field: "lastname", headerName: "Last Name", width: 250 },
      { field: "college", headerName: "College", width: 250 },
      { field: "affiliation", headerName: "Affiliation", width: 250 },
    ],
    []
  );

  return (
    <Box>
      <Header
        title={"Nba Players"}
        subtitle={"In this tab we show some info about the nba players."}
      />
      {playerData && <Table data={playerData} columns={columns} />}
    </Box>
  );
};

export default NbaPlayers;
