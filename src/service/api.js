import { desserts } from "@/data"

export async function getData({ queryKey }){
  const { page, itemsPerPage } = queryKey[1]
  return new Promise(resolve => {
    setTimeout(() => {
      const start = (page - 1) * itemsPerPage
      const end = start + itemsPerPage
      const items = desserts.slice()
      const paginated = items.slice(start, end)

      resolve({ items: paginated, total: items.length })
    }, 500)
  })
}

export async function getD() {
  return new Promise(resove => 1)
}
