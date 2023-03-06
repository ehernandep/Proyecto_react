import { Box, Tab, Tabs, Typography } from "@mui/material";
import NbaTeams from "../NbaTeams/NbaTeams";
import NbaPlayers from "../NbaPlayers/NbaPlayers";
import NbaDashboard from "../NbaDashboard/NbaDashboard";
import {
  getNbaPlayersData,
  getNbaTeamsData,
} from "../../services/nbaData.service";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { playerData, teamData } from "../../data";
import { LoadingMask } from "../../components/LoadingMask";
const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Box>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Box>
  );
};

const Home = () => {
  const [value, setValue] = React.useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading1, setIsLoading1] = useState(false);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  /* const [playerData, setPlayerData] = useState(null); */
  /*   const [teamData, setTeamData] = useState(null);
  const getNbaTeamDataCallback = useCallback(() => {
    setIsLoading(true)
    getNbaTeamsData()
      .then((data) => {
        setTeamData(data.response);
      })
      .catch((error) => {
        console.error(error);
      });
    setIsLoading(false)
  }, []); */

  /*   const getNbaPlayersDataCallback = useCallback(() => {
    setIsLoading1(true)
    getNbaPlayersData()
      .then((data) => {
        setPlayerData(data.response);
      })
      .catch((error) => {
        console.error(error);
      });
    setIsLoading1(false)
  }, []); */

  /*   useEffect(() => {
    getNbaPlayersDataCallback();
  }, [getNbaPlayersDataCallback]);
 */
  /*  useEffect(() => {
    getNbaTeamDataCallback();
  }, [getNbaTeamDataCallback]); */

  return (
    <>
      {playerData && teamData && (
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider" }}
            display='flex'
            justifyContent='center'
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label='basic tabs example'
            >
              <Tab label='Nba Players' />
              <Tab label='Nba Teams' />
              <Tab label='Nba Dashboards' />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <>
              <NbaPlayers playerData={playerData} />
            </>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <>
              <NbaTeams teamData={teamData} />
            </>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <>
              <NbaDashboard playerData={playerData} teamData={teamData} />
            </>
          </TabPanel>
        </Box>
      )}
      {isLoading && isLoading1 && <LoadingMask />}
    </>
  );
};

export default Home;
