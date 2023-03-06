import { Box } from "@mui/material";

import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";
import { teamData } from "../../data";

const NbaTeams = ({ teamData }) => {
  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 250 },
    { field: "nickname", headerName: "Nickname", width: 250 },
    { field: "code", headerName: "Code", width: 250 },
    { field: "city", headerName: "City", width: 250 },
  ];

  return (
    <Box>
      <Header
        title={"Nba Teams"}
        subtitle={"In this tab we show some info about the NBA Teams."}
      />
      {teamData && <Table data={teamData} columns={columns} />}
    </Box>
  );
};

export default NbaTeams;
