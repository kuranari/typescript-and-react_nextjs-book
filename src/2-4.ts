// 2.4.1 Enum型
enum Direction {
  Up,
  Down,
  Left,
  Right
}

let direction: Direction = Direction.Left

console.log(direction)

// 2.4.2 ジェネリック型
class Queue<T> {
  private array: T[] = []

  push(item: T) {
    this.array.push(item)
  }

  pop(): T | undefined {
    return this.array.shift()
  }
}

const queue = new Queue<number>()

queue.push(3)
queue.push(1)
queue.push(4)

// 2.4.3 Union型とIntersection型

type LoginInfo = {
  id_or_username: string | number;
  password: string;
}

const userLoginAttempt1: LoginInfo = { id_or_username: 1111, password: 'aaaa' } 
const userLoginAttempt2: LoginInfo = { id_or_username: 'username', password: 'aaaa' } 

// 2.4.4 リテラル型 
let postStatus: 'draft' | 'published' | 'deleted'
postStatus = 'draft'

// 2.5.1 never型

const move = (direction: Direction) => {
  switch(direction) {
    case Direction.Down:
      return 1
    case Direction.Up:
      return -1
    case Direction.Right:
      return 1
    case Direction.Left:
      return -1
    default: 
      const wrongDirection: never = direction
      throw new Error(`${wrongDirection} is not in Direction`)
  }
}

// 2.5.3 型ガード
type User = {
  info?: {
    name: string;
    age: number;
  }
}

let response = {}
const user = (response as any) as User

if (user.info) {
  console.log(user.info.name)
}

console.log(user.info?.name)

// 2.5.4 keyofオペレーター
interface Person {
  name: string;
  age: number;
  email: string;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const person: Person = {
  name: 'sato',
  age: 20,
  email: 'sato@example.com'
}

getProperty(person, 'name')

// 2.5.5 インデックス型
type SupportVersions = {
  [env: number]: boolean;
}

const versions: SupportVersions = {
  102: false,
  103: true,
  // 'v105': false,
}

// 2.5.7 unknown

const unknown_number: unknown = 123
const any_number: any = 123

// unknown だと型検査なしにtoFixedを実行できない
// console.log(x.toFixed(1))
if (typeof unknown_number === 'number') {
  console.log(unknown_number.toFixed(1))
}

// stringとして扱うなら、型検査が必要。実施にはnumber型なので実行時エラーが発生することはない
if (typeof unknown_number === 'string') {
  console.log(unknown_number.toLowerCase())
}

// any だと型検査なしにtoFixedを実行できる
console.log(any_number.toFixed(1))
if (typeof any_number === 'number') {
  console.log(any_number.toFixed(1))
}

// 実行時エラーが発生する
// console.log(any_number.toLowerCase())

// 2.5.8 非同期のAsync/Await
// async/await や Promise はまだ手に馴染んでいない気がする
function fetchFromServer(id: string): Promise<{success: boolean}> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({success: true})
    }, 100)
  })
}

async function asyncFunc(): Promise<string> {
  const result = await fetchFromServer('111')
  return `The result: ${result.success}`
}

(async () => {
  const result = await asyncFunc()
  console.log(result)
})()

asyncFunc().then(result => console.log(result))
fetchFromServer('123').then(result => console.log(result.success))

