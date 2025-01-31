const { getId } = require('../../utils/index')

class Series {
  constructor(series) {
    this.id = null
    this.name = null
    this.description = null
    this.addedAt = null
    this.updatedAt = null

    if (series) {
      this.construct(series)
    }
  }

  construct(series) {
    this.id = series.id
    this.name = series.name
    this.description = series.description || null
    this.addedAt = series.addedAt
    this.updatedAt = series.updatedAt
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      addedAt: this.addedAt,
      updatedAt: this.updatedAt
    }
  }

  toJSONMinimal(sequence) {
    return {
      id: this.id,
      name: this.name,
      sequence
    }
  }

  setData(data) {
    this.id = getId('ser')
    this.name = data.name
    this.description = data.description || null
    this.addedAt = Date.now()
    this.updatedAt = Date.now()
  }

  checkNameEquals(name) {
    if (!name) return false
    return this.name.toLowerCase() == name.toLowerCase().trim()
  }
}
module.exports = Series