import { render, screen, RenderResult, fireEvent } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { DelayInput } from './index'

describe('DelayInput', () => {
  let renderResult: RenderResult
  let handleChange: jest.Mock

  beforeEach(() => {
    jest.useFakeTimers()
    handleChange = jest.fn()
    renderResult = render(<DelayInput onChange={handleChange}/>)
  })

  afterEach(() => {
    renderResult.unmount()
    jest.useFakeTimers()
  })

  it('span要素のテキストが空であること', () => {
    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

    expect(spanNode).toHaveTextContent('入力したテキスト:')
  })

  it('入力直後はspan要素が「入力中...」と表示する', () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    fireEvent.change(inputNode, { target: { value: inputText }})

    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement
    expect(spanNode).toHaveTextContent('入力中...')
  })

  it('入力して1秒後にテキストが表示される', async () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    fireEvent.change(inputNode, { target: { value: inputText }})
    await act(() => {
      jest.runAllTimers()
    })

    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement
    expect(spanNode).toHaveTextContent(`入力したテキスト: ${inputText}`)
  })

  it('入力して1秒後にonChangeが呼び出される', async () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    fireEvent.change(inputNode, { target: { value: inputText }})
    await act(() => {
      jest.runAllTimers()
    })

    expect(handleChange).toHaveBeenCalled()
  })
})