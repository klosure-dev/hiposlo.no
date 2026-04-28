/**
 * Composable to control and react to state of navigation screen.
 */
export function useNavigationScreen() {
  const open = useState('isNavigationScreenOpen', () => false)
  const toggle = () => open.value = !open.value
  return { open, toggle }
}
