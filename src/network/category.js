import {request} from './request'

export function getCategoryTitles() {
  return request({
    url: '/category'
  })
}

export function getCategoryMaitKey(maitKey) {
  return request({
    url: '/subcategory',
    params: {
      maitKey
    }
  })
}

export function getCategoryMiniWallkey(miniWallkey, type) {
  return request({
    url: '/subcategory/detail',
    params: {
      miniWallkey,
      type
    }
  })
}