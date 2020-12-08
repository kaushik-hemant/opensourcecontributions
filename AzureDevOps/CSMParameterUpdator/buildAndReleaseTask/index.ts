import tl = require('azure-pipelines-task-lib/task');

async function run() {
    try {
        const inputString: string | undefined = tl.getInput('samplestring', true);
        if (inputString == 'bad') {
            tl.setResult(tl.TaskResult.Failed, 'Bad input was given');
            return;
        }
        console.log('Hello', inputString);

        const filepath: string | undefined = tl.getPathInput('parameterfile', true);
        console.log('Path', filepath);

        const source: string | undefined = tl.getInput('source', true);
        console.log('Source', source);
    }
    catch (err) {
        tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();