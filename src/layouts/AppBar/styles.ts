import type { SxRecord } from '@/types/theme';

export const styles: SxRecord<
  | 'root'
  | 'logo'
  | 'mobileLogo'
  | 'avatar'
  | 'avatarIconButton'
  | 'hamburger'
  | 'hamburgerMenu'
  | 'link'
  | 'linkBox'
  | 'profileMenu'
  | 'profileMenuTypo'
> = {
  root: () => ({
    backgroundColor: 'background.paper',
    color: 'text.primary',
  }),
  logo: theme => ({
    mr: theme.spacing(2),
    display: { xs: 'none', md: 'flex' },
    textDecoration: 'none',
    color: theme.palette.text.secondary,
  }),
  mobileLogo: () => ({
    mr: 2,
    display: { xs: 'flex', md: 'none' },
    flexGrow: 1,
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
  }),
  hamburger: () => ({ flexGrow: 1, display: { xs: 'flex', md: 'none' } }),
  avatar: () => ({ flexGrow: 0 }),
  avatarIconButton: () => ({ p: 0 }),
  hamburgerMenu: () => ({ display: { xs: 'block', md: 'none' } }),
  link: theme => ({ display: 'block', color: theme.palette.text.secondary }),
  linkBox: () => ({ flexGrow: 1, display: { xs: 'none', md: 'flex' } }),
  profileMenu: theme => ({ mt: theme.spacing(5) }),
  profileMenuTypo: () => ({ textAlign: 'center' }),
};
