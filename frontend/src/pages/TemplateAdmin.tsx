import { TemplateAdminProps } from "../interfaces"
import { Sidebar } from "."
import { Box } from "@chakra-ui/react"

export const TemplateAdmin = ({ children }: TemplateAdminProps) => {
  return (
    <Box
      padding={5}
      width='100vw'
      height='100vh'
      overflow='hidden'
    >
      <Sidebar />
      <Box
        w='100%'
        h='100%'
        overflowY='auto'
      >
        {children}
      </Box>
    </Box>
  )
}
