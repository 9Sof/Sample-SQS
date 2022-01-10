import { SQSEvent } from 'aws-lambda'

export async function compute (event: SQSEvent) {
  console.log(event)
}
