import AWS from 'aws-sdk'

AWS.config.update({ region: 'ap-southeast-1' })

const sqs = new AWS.SQS({ apiVersion: '2012-11-05' })

export async function test () {
  const params = {
    MessageAttributes: {
      Title: {
        DataType: 'String',
        StringValue: 'The Whistler'
      }
    },
    MessageBody: 'Information about current NY Times fiction bestseller for week of 12/11/2016.',
    QueueUrl: process.env.IS_OFFLINE ? 'http://localhost:9324/queue/MyFirstQueue' : process.env.SQS_MY_FIRST_QUEUE_URL as string
  }

  await sqs.sendMessage(params).promise()

  return {
    statusCode: 200,
    body: 'Success'
  }
}
