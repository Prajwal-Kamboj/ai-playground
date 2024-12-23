'use client'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup, SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel,
    SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarSeparator, SidebarTrigger,
} from "@/components/ui/sidebar"
import { useSidebar } from "@/components/ui/sidebar"
import {ChevronDown, Plus} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";

export function AppSidebar() {
    const {open} = useSidebar();

    return (
        <Sidebar variant="floating" collapsible="icon">
            <SidebarTrigger />
            { open && (
                <><SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    AI
                                    <ChevronDown className="ml-auto"/>
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                                <DropdownMenuItem>
                                    <span>Open AI</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <span>Gemini</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
                <SidebarSeparator />
                <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Start New Chat</SidebarGroupLabel>
                    <SidebarGroupAction>
                        <Plus/> <span className="sr-only">Add Project</span>
                    </SidebarGroupAction>
                    <SidebarGroupContent></SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent></>)}

        </Sidebar>
    )
}
