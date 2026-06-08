import React, { useEffect, useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import List from '@mui/material/List';
import ListIcon from '@mui/icons-material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';

const drawerWidth = 280;
const navItems = [['Expertise', 'expertise'], ['Achievements', 'achievements'], ['Life Beyond Work', 'hobbies'], ['History', 'history'], ['Projects', 'projects'], ['Resources', 'resources'], ['Contact', 'contact']];

function Navigation({parentToChild, modeChange}: any) {

  const {mode} = parentToChild;

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const drawer = (
    <Box className="navigation-bar-responsive" onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <p className="mobile-menu-top"><ListIcon/>Menu</p>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', py: 1.5 }} onClick={() => scrollToSection(item[1])}>
              <ListItemText
                primary={item[0]}
                primaryTypographyProps={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.95rem',
                  letterSpacing: '0.01em'
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        elevation={0}
        sx={{
          backgroundColor: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: scrolled ? '1px solid var(--nav-border)' : '1px solid transparent',
          transition: 'all 0.35s ease',
        }}
      >
        <Toolbar className='navigation-bar' sx={{ minHeight: '64px !important' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' }, color: 'var(--text-primary)' }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            onClick={() => modeChange()}
            sx={{
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              padding: '6px',
              borderRadius: '8px',
              transition: 'background-color 0.25s ease',
              '&:hover': {
                backgroundColor: 'var(--accent-subtle)',
              }
            }}
          >
            {mode === 'dark' ? (
              <LightModeIcon sx={{ fontSize: '1.2rem', color: 'var(--text-primary)' }} />
            ) : (
              <DarkModeIcon sx={{ fontSize: '1.2rem', color: 'var(--text-primary)' }} />
            )}
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: '4px' }}>
            {navItems.map((item) => (
              <Button
                key={item[0]}
                onClick={() => scrollToSection(item[1])}
                sx={{
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 500,
                  fontSize: '0.875rem',
                  textTransform: 'none',
                  padding: '6px 16px',
                  borderRadius: '6px',
                  letterSpacing: '0.01em',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    backgroundColor: 'var(--accent-subtle)',
                    color: 'var(--accent)',
                  }
                }}
              >
                {item[0]}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'var(--bg-primary)',
              borderRight: '1px solid var(--border)',
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;