const BASE_URL = 'https://learn.codeit.kr/0220';

export async function getFoods({
  order = '',
  cursor = '',
  limit = 10,
  search = '',
}) {
  // const query = `order=${order}&cursor=${cursor}&limit=${limit}&search=${search}`;
  let query = '';
  if (order) {
    query += `order=${order}`;
  }
  if (cursor) {
    query += `&cursor=${cursor}`;
  }
  if (limit > 0) {
    query += `&limit=${limit}`;
  }
  if (search) {
    query += `&search=${search}`;
  }
  const response = await fetch(`${BASE_URL}/foods/?${query}`);
  if (!response.ok) {
    throw new Error('데이터를 불러오는 데 실패했습니다.');
  }
  const body = await response.json();
  return body;
}

export async function createFood(formData) {
  const response = await fetch(`${BASE_URL}/foods`, {
    method: 'POST',
    body: formData,
  });
  if (!response.ok) {
    throw new Error('데이터를 생성하는 데 실패했습니다.');
  }
  const body = await response.json();
  return body;
}

export async function updateFood(id, formData) {
  const response = await fetch(`${BASE_URL}/foods/${id}`, {
    method: 'PUT',
    body: formData,
  });
  if (!response.ok) {
    throw new Error('데이터를 수정하는 데 실패했습니다');
  }
  const body = await response.json();
  return body;
}

export async function deleteFood(id) {
  const response = await fetch(`${BASE_URL}/foods/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('데이터를 삭제하는 데 실패했습니다');
  }
  const body = await response.json();
  return body;
}
