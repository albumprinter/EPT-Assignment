import {
  BatchWriteItemCommand,
  BatchWriteItemCommandInput,
} from '@aws-sdk/client-dynamodb';
import {dynamodb} from '../lib/';

const batchInput: BatchWriteItemCommandInput = {
  RequestItems: {
    Photos: [
      {
        PutRequest: {
          Item: {
            id: {S: 'image_1'},
            orderCount: {N: '500'},
            category: {S: 'poster'},
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: {S: 'image_2'},
            orderCount: {N: '95700'},
            category: {S: 'poster'},
            extra: {M: {texture: {S: 'glossy'}}},
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: {S: 'image_3'},
            orderCount: {N: '8500'},
            category: {S: 'poster'},
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: {S: 'image_4'},
            orderCount: {N: '7411'},
            category: {S: 'walldecor'},
            extra: {
              M: {
                texture: {S: 'glossy'},
                border: {N: '5'},
                rotate: {N: '90'},
              },
            },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: {S: 'image_5'},
            orderCount: {N: '112800'},
            category: {S: 'poster'},
            extra: {M: {texture: {S: 'glossy'}}},
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: {S: 'image_6'},
            orderCount: {N: '12500'},
            category: {S: 'walldecor'},
            extra: {M: {border: {N: '3'}, rotate: {N: '180'}}},
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: {S: 'image_7'},
            orderCount: {N: '1000'},
            category: {S: 'walldecor'},
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: {S: 'image_8'},
            orderCount: {N: '78400'},
            category: {S: 'card'},
            extra: {M: {border: {N: '3'}}},
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: {S: 'image_9'},
            orderCount: {N: '97100'},
            category: {S: 'card'},
            extra: {M: {rotate: {N: '90'}}},
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: {S: 'image_10'},
            orderCount: {N: '350'},
            category: {S: 'poster'},
            extra: {M: {texture: {S: 'canvas'}}},
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: {S: 'image_11'},
            orderCount: {N: '77980'},
            category: {S: 'walldecor'},
            extra: {
              M: {
                texture: {S: 'canvas'},
                border: {N: '3'},
                rotate: {N: '90'},
              },
            },
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: {S: 'image_12'},
            orderCount: {N: '100000'},
            category: {S: 'walldecor'},
            extra: {M: {border: {N: '5'}}},
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: {S: 'image_13'},
            orderCount: {N: '3000'},
            category: {S: 'card'},
            extra: {M: {border: {N: '5'}}},
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: {S: 'image_14'},
            orderCount: {N: '49700'},
            category: {S: 'card'},
            extra: {M: {rotate: {N: '270'}}},
          },
        },
      },
      {
        PutRequest: {
          Item: {
            id: {S: 'image_15'},
            orderCount: {N: '8500'},
            category: {S: 'card'},
            extra: {M: {rotate: {N: '180'}}},
          },
        },
      },
    ],
  },
};

export async function seedPhotos() {
  try {
    const data = await dynamodb.send(new BatchWriteItemCommand(batchInput));
    console.log('Seeding Data Complete', data);
  } catch (err) {
    console.error('error', err);
  }
}
