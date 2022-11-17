import React, { useState } from 'react'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'
import FormSearch from '../Common/FormSearch/FormSearch'
import { replyFormItemMap } from '../../utils/form-search'
import { useReplyList } from '../../request/api/reply'
import ReplyTable from './ReplyTable'

export default function ReplyList() {
  useDocumentTitle('回复列表')

  const initParams = {
    page: 1,
    is_user: 1,
    is_article: 1
  }
  const [params, setParams] = useState(initParams)

  const { data: { data: replyList = [], meta: pagination = {} } = {}, isLoading } = useReplyList(params)

  return (
    <div>
      <FormSearch formItemMap={replyFormItemMap} setParams={setParams} initParams={initParams} />
      <ReplyTable
        isLoading={isLoading}
        replyList={replyList}
        pagination={pagination}
        params={params}
        setParams={setParams}
      />
    </div>
  )
}
