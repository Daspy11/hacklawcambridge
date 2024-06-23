import { Link } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import Sidebar from "@/components/sidebar"
import Topbar from "@/components/topbar"

export default function Component() {
  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
      <Sidebar/>
      <div className="flex flex-col">
        <Topbar/>
        <main className="flex flex-1 gap-4 p-4 md:gap-8 md:p-6">
          <div className="border shadow-sm rounded-lg p-4 flex-1">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-lg">Contract Details</h2>
              <Button variant="outline" size="sm">
                View PDF
              </Button>
            </div>
            <div className="mt-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Trait</TableHead>
                    <TableHead>Expected Value</TableHead>
                    <TableHead>Actual Value</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Data Privacy</TableCell>
                    <TableCell>ID: 123, Expires: 2024-06-30</TableCell>
                    <TableCell>ID: 123, Expires: 2024-06-30</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-green-100 text-green-600">
                          Compliant
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Link href="#" className="text-blue-600 underline" prefetch={false}>
                        View Section
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Accessibility</TableCell>
                    <TableCell>ID: 456, Expires: 2024-09-15</TableCell>
                    <TableCell>ID: 456, Expires: 2024-09-15</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-green-100 text-green-600">
                          Compliant
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Link href="#" className="text-blue-600 underline" prefetch={false}>
                        View Section
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Security</TableCell>
                    <TableCell>ID: 789, Expires: 2024-12-31</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-red-100 text-red-600">
                          Breached
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Link href="#" className="text-blue-600 underline" prefetch={false}>
                        View Section
                      </Link>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Performance</TableCell>
                    <TableCell>ID: 321, Expires: 2025-03-31</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="bg-gray-100 text-gray-600">
                          Unknown
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Link href="#" className="text-blue-600 underline" prefetch={false}>
                        View Section
                      </Link>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
          <div className="grid gap-6 w-96">
            <Card>
              <CardHeader>
                <CardTitle>Contract Metadata</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-xs">Signing Date</span>
                  <span className="text-xs">June 15, 2023</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-xs">Signee</span>
                  <span className="text-xs">John Doe</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-xs">Contract Between</span>
                  <span>Acme Inc.</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-xs">Contract Value</span>
                  <span className="text-xs">$50,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium text-xs">Renewal Date</span>
                  <span className="text-xs">June 15, 2024</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Contract Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative pl-6 after:absolute after:inset-y-0 after:w-px after:bg-muted-foreground/20 after:left-0 grid gap-6">
                  <div className="grid gap-1 text-sm relative">
                    <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                    <div className="font-medium">Contract Signed</div>
                    <div className="text-muted-foreground">June 15, 2023</div>
                  </div>
                  <div className="grid gap-1 text-sm relative">
                    <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                    <div className="font-medium">Contract Reviewed</div>
                    <div className="text-muted-foreground">June 20, 2023</div>
                  </div>
                  <div className="grid gap-1 text-sm relative">
                    <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                    <div className="font-medium">Contract Approved</div>
                    <div className="text-muted-foreground">June 22, 2023</div>
                  </div>
                  <div className="grid gap-1 text-sm relative">
                    <div className="aspect-square w-3 bg-primary rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-1" />
                    <div className="font-medium">Contract Executed</div>
                    <div className="text-muted-foreground">June 25, 2023</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

function FileTextIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10 9H8" />
      <path d="M16 13H8" />
      <path d="M16 17H8" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function Package2Icon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}


function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}