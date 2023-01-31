// @ts-nocheck
/**
 * todo를 추가 내용이 필수로 있어야함
 * @param {string} id - 아이디
 * @param {string} content - 내용
 * @param {boolean} isDone - 완료 여부
 * @param {string} category - 카테고리
 * @param {string[]} tags - 태그들
 * @return {object} -추가가 잘 되었는지 결과 반환
 */
function addTodo(id, content, isDone, category, tags) {}

/**
 * 투두를 검색하는 내용
 * @param {string} inputId -검색하기 위해 입력된 id값
 * @return {object} -맞는 id라면 투두 반환
 */
function readTodo(inputId) {}

/**
 * 투두를 업데이트하는 함수
 * @param {string} inputId -검색하기 위해 입력된 id값
 * @return {object} -투두 반환
 */
function updateTodo(inputId, { content, isDone, category, tags }) {
  /** readTodo함수와 id를 이용해 투두를 검색한 후 내용을 바꾼다*/
}

/**
 * 투두를 삭제하는 함수
 * @param {string} inputId -검색하기 위해 입력된 id값
 */
function deleteTodo(inputId) {
  /** readTodo함수와 id를 이용해 투두를 검색한 후 삭제*/
}
