export const fetchData = (id: string) => {
  const client = {
    data: {
      name: 'Vasil',
      lastName: 'Pupkin',
      id: id
    }
  }
  return Promise.resolve( client )
}
