export const parseMysqlPost=(results:Object[][]):number=>{
  return Number (Object.values(JSON.parse(JSON.stringify(results[0][0]))));
}