export interface Analysis {
  name: string;
  prompt: string;
};

export interface AnalysisUI extends Analysis {
  response: string;
}

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

  async runAnalysis(analysis: Analysis, text: string): Promise<Partial<AnalysisResponse>> {

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
