

const zzLists = document.querySelectorAll('.zz')
const dataLists = document.querySelectorAll('.data-list')

zzLists.forEach(zz => {
  zz.addEventListener('mousemove', () => {
    const targetDataset = zz.dataset.list
    dataLists.forEach(list => {
      list.classList.add('hide')
    })
    document.querySelector(targetDataset).classList.remove('hide')
  })
})