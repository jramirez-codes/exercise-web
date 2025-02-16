import { Link } from "react-router"
import { Dumbbell, User, Settings } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

const navItems = [
  { name: "Exercises", href: "/exercises", icon: Dumbbell },
  { name: "Profile", href: "/profile", icon: User },
  { name: "Settings", href: "/settings", icon: Settings },
]

export default function Navigation() {
  return (
    <nav className="border-b">
      <div className="pl-2 pr-2 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 hidden md:flex">
          <Dumbbell className="h-6 w-6" />
          <span className="font-bold text-xl">ExerciseHub</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <Link to={item.href} key={item.name}>
                  <NavigationMenuItem className="hover:bg-accent rounded p-1 ml-1 mr-1">
                    <NavigationMenuLink className="flex justify-between">
                      <Icon className="h-5 w-5 mt-1 mr-2" />
                      <h1 className="font-bold text-lg">
                        {item.name}
                      </h1>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </Link>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}

