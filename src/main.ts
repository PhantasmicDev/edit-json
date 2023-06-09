import * as core from '@actions/core'

async function run(): Promise<void> {
    try {

        const inputs: {[key: string]: string} = {};

        // Retrieve all the input names
        const inputNames = Object.keys(process.env).filter((key) =>
            key.startsWith('INPUT_')
        );

        // Retrieve the values for each input
        inputNames.forEach((name) => {
            const inputName = name.slice(6); // Remove "INPUT_" prefix
            const inputRawValue = process.env[name] || '';
            const inputValue = inputRawValue.replace(/%0A/g, '\n').trim();
            inputs[inputName] = inputValue;
        });

        console.log('All inputs:', inputs);

    } catch (error) {
        if (error instanceof Error) core.setFailed(error.message)
    }
} 

run()