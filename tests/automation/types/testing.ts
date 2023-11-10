import { Page } from '@playwright/test';

export type User = {
  userName: string;
  sessionid: string;
  recoveryPhrase: string;
};

export type Group = {
  userName: string;
  userOne: User;
  userTwo: User;
  userThree: User;
};

export type ConversationType = '1:1' | 'Group' | 'Community' | 'Note to Self';

export type StrategyExtractionObj =
  | {
      strategy: Extract<Strategy, ':has-text' | 'class'>;
      selector: string;
    }
  | {
      strategy: Extract<Strategy, 'data-testid'>;
      selector: DataTestId;
    };

export type WithPage = { window: Page };
export type WithMaxWait = { maxWait?: number };
export type WithRightButton = { rightButton?: boolean };

export type loaderType = 'loading-animation' | 'loading-spinner';

export type Strategy = 'data-testid' | 'class' | ':has-text';

export type DataTestId =
  | 'session-id-signup'
  | 'display-name-input'
  | 'recovery-phrase-seed-modal'
  | 'path-light-container'
  | 'new-conversation-button'
  | 'chooser-new-conversation-button'
  | 'new-session-conversation'
  | 'next-new-conversation-button'
  | 'control-message'
  | 'disappear-control-message'
  | 'disappearing-messages-indicator'
  | 'back-button-conversation-options'
  | 'conversation-options-avatar'
  | 'settings-section'
  | 'clear-data-settings-menu-item'
  | 'message-requests-settings-menu-item'
  | 'restore-using-recovery'
  | 'recovery-phrase-input'
  | 'continue-session-button'
  | 'label-device_and_network'
  | 'message-request-banner'
  | 'module-conversation__user__profile-name'
  | 'decline-message-request'
  | 'session-confirm-ok-button'
  | 'dropdownitem-5-seconds'
  | 'disappearing-messages-dropdown'
  | 'session-toast'
  | 'accept-message-request'
  | 'confirm-nickname'
  | 'nickname-input'
  | 'three-dots-conversation-options'
  | 'message-section'
  | 'conversations-settings-menu-item'
  | 'reveal-blocked-user-settings'
  | 'unblock-button-settings-screen'
  | 'leftpane-primary-avatar'
  | 'edit-profile-icon'
  | 'profile-name-input'
  | 'image-upload-section'
  | 'save-button-profile-update'
  | 'modal-close-button'
  | 'send-message-button'
  | 'message-input-text-area'
  | 'end-voice-message'
  | 'microphone-button'
  | 'enable-microphone'
  | 'theme-section'
  | 'call-button'
  | 'enable-calls'
  | 'end-call'
  | 'privacy-settings-menu-item'
  | 'set-password-button'
  | 'password-input'
  | 'password-input-confirm'
  | 'change-password-settings-button'
  | 'password-input-reconfirm'
  | 'messages-container'
  | 'chooser-new-group'
  | 'new-closed-group-name'
  | 'next-button'
  | 'link-device'
  | 'group-name-input'
  | 'right-panel-group-name'
  | 'header-conversation-name'
  | 'copy-button-profile-update'
  | 'loading-spinner'
  | 'empty-conversation-notification'
  | 'your-profile-name'
  | 'your-session-id'
  | 'mentions-popup-row'
  | 'enable-read-receipts'
  | 'disappear-set-button'
  | 'disappear-after-read-option'
  | 'disappearing-messages'
  | 'disappear-after-send-option'
  | 'time-option-1-minute'
  | 'time-option-10-seconds'
  | 'disappear-set-button'
  | 'add-user-button'
  | 'message-content'
  | 'group-update-message'
  | 'message-request-response-message'
  | 'image-upload-click';
