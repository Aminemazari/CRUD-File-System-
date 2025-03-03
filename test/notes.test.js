const add = (a,b)=>{
  return a+b;
}
test('add take two numbers and return a sum', () => {
  const result = add(1,2);
  expect(result).toBe(3);
});