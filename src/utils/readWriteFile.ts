import fs from 'fs';

const readFile = async (filePath: string): Promise<any> => {
  const rFile = await fs.promises.readFile(filePath, 'utf8');
  const content = JSON.parse(rFile);

  return content;
};

const writeFile = async (filePath: string, content: any): Promise<void> => {
  const wFile = await fs.promises
    .writeFile(filePath, JSON.stringify(content), 'utf8');

  return wFile;
};

export { readFile, writeFile };
