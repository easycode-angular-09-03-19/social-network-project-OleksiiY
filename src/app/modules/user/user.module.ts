import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileCoverComponent } from './components/profile-cover/profile-cover.component';
import { ProfileControlsComponent } from './components/profile-controls/profile-controls.component';
import { ProfileTabsContainerComponent } from './components/profile-tabs-container/profile-tabs-container.component';
import { ProfileSelfiesComponent } from './components/profile-selfies/profile-selfies.component';
import { PicturePreviewComponent } from './components/picture-preview/picture-preview.component';
import { MatListModule, MatToolbarModule } from '@angular/material';
import { ProfileFavouritesComponent } from './components/profile-favourites/profile-favourites.component';
import { FavouritesItemComponent } from './components/favourites-item/favourites-item.component';
import { ProfileFollowersComponent } from './components/profile-followers/profile-followers.component';
import { ProfileFollowingComponent } from './components/profile-following/profile-following.component';
import { FollowerItemComponent } from './components/follower-item/follower-item.component';

@NgModule({
  declarations: [
    SettingsComponent,
    ProfileComponent,
    ProfileCoverComponent,
    ProfileControlsComponent,
    ProfileTabsContainerComponent,
    ProfileSelfiesComponent,
    PicturePreviewComponent,
    ProfileFavouritesComponent,
    FavouritesItemComponent,
    ProfileFollowersComponent,
    ProfileFollowingComponent,
    FollowerItemComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatToolbarModule,
    MatListModule,
  ]
})
export class UserModule {
}
