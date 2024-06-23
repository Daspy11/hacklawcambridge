import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import {
  Button,
  Menu,
  MenuItem,
  MenuList,
  Badge,
  InputBase,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Grid,
  Paper,
  Box
} from '@mui/material';
import { Home, Description, People, Settings, Search, MoreVert } from '@mui/icons-material';

export default function Component() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
        <Router>
          <Grid container style={{ minHeight: '100vh' }}>
            <Grid item lg={3} md={4} sm={12} xs={12} component={Paper} variant="outlined" square>
              <Box p={2}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                  <Button startIcon={<Home />} fullWidth>
                    Contract Manager
                  </Button>
                </Link>
                <Box mt={2}>
                  <nav>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      <Button startIcon={<Home />} fullWidth>Dashboard</Button>
                    </Link>
                    <Link to="/contracts" style={{ textDecoration: 'none' }}>
                      <Button startIcon={<Description />} fullWidth>Contracts</Button>
                    </Link>
                    <Link to="/clients" style={{ textDecoration: 'none' }}>
                      <Button startIcon={<People />} fullWidth>Clients</Button>
                    </Link>
                    <Link to="/settings" style={{ textDecoration: 'none' }}>
                      <Button startIcon={<Settings />} fullWidth>Settings</Button>
                    </Link>
                  </nav>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={9} md={8} sm={12} xs={12} container direction="column">
              <AppBar position="static" color="default">
                <Toolbar>
                  <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Contracts
                  </Typography>
                  <Box flexGrow={1}>
                    <Box display="flex" alignItems="center">
                      <Search />
                      <InputBase placeholder="Search contracts..." style={{ marginLeft: 8, flex: 1 }} />
                    </Box>
                  </Box>
                  <IconButton edge="end" color="inherit">
                    <img src="/placeholder.svg" width="32" height="32" alt="Avatar" style={{ borderRadius: '50%' }} />
                  </IconButton>
                  <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
                    <MoreVert />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Support</MenuItem>
                    <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                  </Menu>
                </Toolbar>
              </AppBar>
              <Container>
                <Box mt={4}>
                  <Paper>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Contract</TableCell>
                          <TableCell>Client</TableCell>
                          <TableCell>Start Date</TableCell>
                          <TableCell>End Date</TableCell>
                          <TableCell align="right">Constraints</TableCell>
                          <TableCell align="right">Compliance</TableCell>
                          <TableCell align="right">Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {[
                          { id: '#3210', client: 'Acme Inc.', start: 'February 20, 2022', end: 'December 31, 2023', constraints: 12, compliance: 'Safe', complianceColor: 'success' },
                          { id: '#3209', client: 'Globex Inc.', start: 'January 5, 2022', end: 'June 30, 2024', constraints: 8, compliance: 'Danger', complianceColor: 'warning' },
                          { id: '#3204', client: 'Stark Industries', start: 'August 3, 2021', end: 'July 31, 2023', constraints: 15, compliance: 'Breached', complianceColor: 'error' }
                        ].map((contract) => (
                          <TableRow key={contract.id}>
                            <TableCell>
                              <Link to="#" style={{ textDecoration: 'none' }}>
                                <Button color="primary">{contract.id}</Button>
                              </Link>
                            </TableCell>
                            <TableCell>{contract.client}</TableCell>
                            <TableCell>{contract.start}</TableCell>
                            <TableCell>{contract.end}</TableCell>
                            <TableCell align="right">
                              <Badge color="primary" badgeContent={contract.constraints}></Badge>
                            </TableCell>
                            <TableCell align="right">
                              <Badge color={contract.complianceColor} variant="standard" badgeContent={contract.compliance}/>
                            </TableCell>
                            <TableCell align="right">
                              <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
                                <MoreVert />
                              </IconButton>
                              <Menu
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleMenuClose}
                              >
                                <MenuItem onClick={handleMenuClose}>View Contract</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Edit Contract</MenuItem>
                                <MenuItem onClick={handleMenuClose}>Renew Contract</MenuItem>
                              </Menu>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </Paper>
                </Box>
              </Container>
            </Grid>
          </Grid>
          <Routes>
            <Route path="/contracts" element={<ContractsPage />} />
            <Route path="/clients" element={<ClientsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/" element={<DashboardPage />} />
          </Routes>
        </Router>
  )
}

function ContractsPage() {
  return <div>Contracts Page</div>;
}

function ClientsPage() {
  return <div>Clients Page</div>;
}

function SettingsPage() {
  return <div>Settings Page</div>;
}

function DashboardPage() {
  return <div>Dashboard Page</div>;
}