import { Box } from "@mui/material";
import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";

const NbaDashboard = ({ playerData, teamData }) => {
  const columnsTeams = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 250 },
    { field: "nickname", headerName: "Nickname", width: 250 },
    { field: "code", headerName: "Code", width: 250 },
    { field: "city", headerName: "City", width: 250 },
  ];

  const columnsPlayers = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "firstname", headerName: "First Name", width: 250 },
    { field: "lastname", headerName: "Last Name", width: 250 },
    { field: "college", headerName: "College", width: 250 },
    { field: "affiliation", headerName: "Affiliation", width: 250 },
  ];

  return (
    <Box>
      <Header
        title={"Nba Dashboard"}
        subtitle={
          "In this tab we show all the information of teams and also players."
        }
      />
      <Box display='flex' justifyContent='space-between'>
        <Box sx={{ width: "40%" }}>
          <Table data={playerData} columns={columnsPlayers} />
        </Box>
        <Box sx={{ width: "40%" }}>
          <Table data={teamData} columns={columnsTeams} />
        </Box>
      </Box>
    </Box>
  );
};

export default NbaDashboard;
