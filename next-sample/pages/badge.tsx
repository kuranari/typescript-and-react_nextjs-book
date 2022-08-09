import { NextPage } from "next"
import styled from "styled-components"

const Badge = styled.span`
  padding: 8px;
  font-weight: bold;
  text-align: center;
  color: white;
  background: red;
  border-radius: 16px;
`

const Page: NextPage = () => {
  return <Badge>Hello world!</Badge>
}

export default Page
