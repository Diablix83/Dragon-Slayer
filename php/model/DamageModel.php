<?php

	class DamageModel extends Model{

		protected $table = 'project001_damage_types';

		public function allWeakness(){
			$request = $this->db->query("SELECT * FROM project001_weakness");

			return $request->fetchAll();
		}

	}
?>
