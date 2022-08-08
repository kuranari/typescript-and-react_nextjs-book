import React from "react";

// P.86 型注釈を入れるとjsxの要素に対しても静的型チェックができる
type ContainerProps = {
  title: string;
  children: React.ReactNode;
}

const Container = (props: ContainerProps): JSX.Element => {
  const {title, children} = props

  return (
    <div style={{ background: 'red' }}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  )
}

const Parent = (): JSX.Element => {
  return (
    <Container title="hello">
      <p>ここの部分が背景色で囲まれます</p>
    </Container>
  )
}

export default Parent