import { render, screen, RenderResult, fireEvent } from '@testing-library/react'
import { Input } from './index'

describe('Input', () => {
  let renderResult: RenderResult

  beforeEach(() => {
    renderResult = render(<Input id="username" label="Username" />)
  })

  afterEach(() => {
    renderResult.unmount()
  })

  it('初期描画時にinput要素は空であること', () => {
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement

    expect(inputNode).toHaveValue('')
  }) 

  it('文字を入力したら、入力した内容が表示されること', () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement

    fireEvent.change(inputNode, { target: { value: inputText }})

    expect(inputNode).toHaveValue(inputText)
  })

  it('Resetボタンが押されたら、入力テキストはクリアされること', () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByLabelText('Username') as HTMLInputElement
    fireEvent.change(inputNode, { target: { value: inputText }})

    const buttonNode = screen.getByRole('button', { name: 'Reset' }) as HTMLInputElement
    fireEvent.click(buttonNode)

    expect(inputNode).toHaveValue('')
  })
})
