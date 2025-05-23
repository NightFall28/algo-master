import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Sidebar } from "./sidebar"
import { Menu } from "lucide-react"

export const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-white" />
            </SheetTrigger>
            <SheetContent className="p-0 z-[100]" side={"left"}>
                <SheetHeader>
                    <SheetTitle>
                    </SheetTitle>
                </SheetHeader>
                <Sidebar />
            </SheetContent>
        </Sheet>
    )
}