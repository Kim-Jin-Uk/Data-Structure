// 단방향 연결리스트
class LinkedList {
    constructor() {
        class Node {
            constructor(element) {
                this.element = element
                this.next = null
            }
        }

        var length = 0
        var head = null

        this.append = function (element) { 
            var node = new Node(element)
            var current
            // Linked List가 비어있는 경우
            if (head === null) head = node
            // 비어 있지 않은 경우
            else {
                current = head
                // 마지막 원소를 발견할 때까지 계속 루프 순환한다.
                while (current.next) current = current.next
                // 마지막 원소를 링크할 수 있게 다음 노드에 핟당한다.
                current.next = node
                length ++
            }
        }
        this.insert = function (element,position) { 
            if (position >= 0 && position <= length) {
                // 삭제할 원소가 범위 외 값인지 체크
                let node = new Node(element) // 추가할 원소
                let current = head // head
                let previous // 삭제할 원소
                let index = 0 // 자리 체크용 인덱스
          
                // 첫 번째 위치에 원소 추가
                if (position === 0) {
                  node.next = current
                  head = node // update head
                }
                // general case
                else {
                    while (index++ < position) {
                        // traverse
                        previous = current
                        current = current.next
                    }
                    node.next = current
                    previous.next = node
                }
                length++
                return true
            } else return false
        }
        this.removeAt = function (position) { 
            // 원소의 위치를 기준으로 삭제하는 메소드
            if (position > -1 && position < length) {
                let current = head // 삭제할 원소
                let previous // 삭제할 원소의 이전 원소
                let index = 0
                // ex) 1 -> 2 -> 3
                // 첫 번째 원소 삭제
                if (position === 0) head = current.next
                // 1 -> 2 -> 3 => 2 -> 3
                // General Case
                else {
                    while (index++ < position) {
                        // 해당 인덱스를 찾을 때까지
                        previous = current; // previous = 1
                        current = current.next // current = 2
                        // 계속 값을 업데이트 시켜준다.
                    }
                    previous.next = current.next // 1 -> 3(current.next = 3)
                }
                length--
        
                return current.element
            } else return null
        }
        this.indexOf = function (element) {
            let current = head
            let index = -1
        
            while (current) {
                if (element === current.element) return index
                index++
                current = current.next // update current
            }
            return -1
        }
        this.toArray = function () {
            let current = head
            let array = []
        
            while (current) {
                array.push(current.element)
                current = current.next // current를 다음 값으로 계속 업데이트해주기
            }
            return array
        }

        // 배열의 형태로 쉽게 확인할 수 있도록 하기 위함.
        this.print = function () { 
            console.log(this.toArray())
        }
    }
}

const link = new LinkedList()
link.append(1)
link.append(2)
link.append(3)
link.append(4)
link.print()
link.insert(5,1)
link.print()
link.removeAt(0)
link.print()