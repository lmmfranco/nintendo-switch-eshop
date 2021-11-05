import TabItem from '@theme/TabItem';
import Tabs from '@theme/Tabs';
import npmToYarn from 'npm-to-yarn';
import React, { FC } from 'react';
import InstallTabButton from './InstallTabButton';
import styles from './InstallTabs.module.css';

const InstallTabs: FC = () => {
  const npmInstallCommand = 'npm install nintendo-switch-eshop';
  const yarnInstallCommand = npmToYarn(npmInstallCommand, 'yarn');

  const handleClickInstallButton = async (command: string) => {
    await navigator.clipboard.writeText(command);
  };

  return (
    <div className={styles.buttons}>
      <Tabs groupId="npm2yarn" className={styles.tabs}>
        <TabItem value="npm" label="npm" default>
          <InstallTabButton installCommand={npmInstallCommand} handleClickInstallButton={() => handleClickInstallButton(npmInstallCommand)} />
        </TabItem>
        <TabItem value="yarn" label="Yarn">
          <InstallTabButton installCommand={yarnInstallCommand} handleClickInstallButton={() => handleClickInstallButton(yarnInstallCommand)} />
        </TabItem>
      </Tabs>
    </div>
  );
};

export default InstallTabs;
