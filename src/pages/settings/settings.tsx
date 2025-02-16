import { useTheme } from "@/components/ui-blocks/theme-provider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function Settings() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="min-h-screen pl-2 pr-2 space-y-2">
      <h1 className="text-4xl font-bold">Settings</h1>
      <h1 className="text-2xl font-bold text-center">Color Theme</h1>
      <ToggleGroup type="single" value={theme}>
        <ToggleGroupItem value="dark" onClick={()=>{setTheme('dark')}}>Dark</ToggleGroupItem>
        <ToggleGroupItem value="system" onClick={()=>{setTheme('system')}}>System</ToggleGroupItem>
        <ToggleGroupItem value="light" onClick={()=>{setTheme('light')}}>Light</ToggleGroupItem>
      </ToggleGroup>
    </div>
  )
}