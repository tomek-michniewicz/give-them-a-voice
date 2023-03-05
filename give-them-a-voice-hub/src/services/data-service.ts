export interface Analysis {
  name: string;
  prompt: string;
};

export interface AnalysisUI extends Analysis {
  response: string;
}

// AnalysisResponse
// {
//   "id": "chatcmpl-6p5FEv1JHictSSnDZsGU4KvbuBsbu",
//   "object": "messages",
//   "created": 1677693600,
//   "model": "gpt-3.5-turbo",
//   "choices": [
//     {
//       "index": 0,
//       "finish_reason": "stop",
//       "message": {
//         "role": "assistant",
//         "content": "OpenAI's mission is to ensure that artificial general intelligence benefits all of humanity."
//       }
//     }
//   ],
//   "usage": {
//     "prompt_tokens": 20,
//     "completion_tokens": 18,
//     "total_tokens": 38
//   }
// }

export interface AnalysisResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: [
    {
      index: number;
      finish_reason: string;
      message: {
        role: string;
        content: string;
      }
    }
  ];
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  }
}

export class DataService {

  async runAnalysis(analysis: any): Promise<Partial<AnalysisResponse>> {

    return Promise.resolve({
      choices: [
        {
          message: {
            role: "assistant",
            content: `Resp: ${analysis.name}`
          },
          finish_reason: "stop",
          index: 0
        }
      ],
    });

    // const response = await fetch(
    //   "https://us-central1-give-them-a-voice.cloudfunctions.net/analyze",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(analysis),
    //   }
    // );
    // return await response.json();
  }
}

export const dataService = new DataService();
