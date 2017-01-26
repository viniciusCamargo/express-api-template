import monk from 'monk'

export const db = monk('localhost:27017/myproject')
export const collection = db.get('document')
