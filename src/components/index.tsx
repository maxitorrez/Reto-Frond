import * as React from 'react';
import {Tabs,Tab,Container,Box,Typography} from '@mui/material';
import RecordView from './Record';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const QuestAnswer = () => {

const [value, setValue] = React.useState(0);


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };



  return (
    <>
        <Container >
            <h1 style={{textAlign: "center", textTransform:'uppercase'}}>Video Cuestionario</h1>

            <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="secondary"  >
                <Tab label="Cuestionario 1"  />
                <Tab label="Cuestionario 2" sx={{ marginLeft: '22rem' }} />
                <Tab label="Cuestionario 3"  sx={{ marginLeft: '20rem' }}/>
                </Tabs>
                </Box>
            <TabPanel value={value} index={0}>

                    <RecordView />  
                    <p style={{fontSize: "1.5rem"}}>¿Cuál es tu color favorito?</p>
            </TabPanel>
            <TabPanel value={value} index={1}>
                    <RecordView />
                    <p style={{fontSize: "1.5rem"}}>¿Cuales son tus pasa tiempos?</p>
    
            </TabPanel>
            <TabPanel value={value} index={2}>

                    <RecordView />
                    <p style={{fontSize: "1.5rem"}}>¿Cuál es tu mayor logro?</p>

            </TabPanel>
            </Box>

        </Container>
    </>
 );
}

export default QuestAnswer;